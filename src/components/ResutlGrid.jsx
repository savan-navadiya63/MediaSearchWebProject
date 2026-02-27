import React, { useEffect } from "react";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaAip";
import { setLoading, setError, setResults } from "../redux/features/serchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResutlGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];

          if (activeTab === "Photos") {
            const response = await fetchPhotos(query);

            const photos = response?.results || [];
            data = photos.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description || item.description || "Photo",
              thumbnail: item.urls?.small || item.urls?.thumb,
              src: item.urls?.regular || item.urls?.full || item.urls?.small,
              url: item.links.html,
            }));
            console.log(response.results);
          }

          if (activeTab === "Videos") {
            const response = await fetchVideos(query);

            const videos = response?.videos || [];
            data = videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user?.name || "video",
              thumbnail: item.image,
              src: item.video_files?.[0]?.link,
              url: item.url,
            }));
          }

          if (activeTab === "GIFs") {
            const response = await fetchGIF(query);

            const gifs = response?.results || response || [];
            data = (gifs || []).map((item) => ({
              id: item.id,
              title: item.title || item.content_description || "GIF",
              type: "gif",
              thumbnail:
                item.media_formats?.tinygif?.url ||
                item.media_formats?.mediumgif?.url,
              src:
                item.media_formats?.gif?.url ||
                item.media_formats?.mediumgif?.url ||
                item.media_formats?.tinygif?.url ||
                item.url,
              url: item.url,
            }));
          }

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };

      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1> Error .......</h1>;
  if (loading) return <h1> Loading......</h1>;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
        {results.map((item, idx) => {
          return (
            <div key={idx} className="flex justify-center">
              <ResultCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResutlGrid;

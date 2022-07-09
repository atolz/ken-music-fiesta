import React, { useContext, useEffect, useState } from "react";
import TableV1 from "../../Tables/TableV1";
import PoweredBy from "../../Cards/PoweredBy";
import { DataContext } from "../../../Context/fetchData";
import TracksUploadedTable from "../../Tables/TracksUploaded";

const CatalogueDashboard = () => {
  const AppData = useContext(DataContext);
  const artisteCatalogues = AppData.artistesUser.catalogues;
  const artiste = AppData.artistesUser.dashboardHistory;
  const [tracks, setTracks] = useState([]);

  const buildAllTracksFromCatalogues = (catalogues) => {
    const tracksArrays = catalogues?.map((cat) => {
      // Add album Title to all tracks
      const modified = cat.songTracks.map((track) => {
        let newTrack = { ...track, albumTitle: cat.albumTitle };
        return newTrack;
      });

      return modified;
    });

    let allTracks = [];

    // combine all tracks array into a single track obj array
    tracksArrays?.forEach((element) => {
      allTracks = [...allTracks, ...element];
    });
    console.log("processed tracks are", allTracks);
    return allTracks;
  };

  useEffect(() => {
    console.log("Catalogys is.//////..", artisteCatalogues);
    const allTracks = buildAllTracksFromCatalogues(artisteCatalogues);
    console.log("All tracks is:", allTracks);
    setTracks(allTracks);
  }, [artisteCatalogues]);

  return (
    <div>
      <div className="flex flex-wrap mobile:gap-5 mb-[3.2rem]">
        <div onClick={() => {}} className="relative  bg-[#F6EBF5] rounded-[2rem] py-[3.9rem] px-[3.5rem] text-[1rem] min-w-[27rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[21.4rem]">{artiste.songTracksNumber} Tracks</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Total Number of Tracks </p>
          <img src="/3d-play.svg" className="absolute bottom-[0rem] right-[4rem] w-[40%] xl:w-[32%]"></img>
        </div>
        <div onClick={() => {}} className="relative  min-w-[27rem] bg-[#F0F0F0] rounded-[2rem] py-[3.9rem] px-[3.5rem] flex-1 hover:scale-[1.01] hover:shadow-sm cursor-pointer">
          <h3 className="font-bold text-[2.9rem] leading-[3.5rem] max-w-[26.4rem]">{artiste.cataloguesNumber} Catalogues</h3>
          <p className="text-[1.4rem] text-[#717171] font-normal leading-[2rem] max-w-[18.9rem] mt-[1.6rem] mb-[11rem]">Total Number of Catalogues</p>
          <img src="/3d-cd-music.svg" className="absolute bottom-0 right-[4rem]  w-[40%] xl:w-[36%]"></img>
        </div>
      </div>

      {/* Third Section: Latest Winner Section */}
      <section className="flex flex-wrap gap-10">
        {/* div-1 */}
        <div className=" flex-1">
          <TracksUploadedTable data={tracks}></TracksUploadedTable>
        </div>

        {/* div-2 */}
        <div className=" flex-1">
          <PoweredBy></PoweredBy>
        </div>
      </section>
    </div>
  );
};

export default CatalogueDashboard;

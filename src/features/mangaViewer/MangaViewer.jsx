import React from "react";
import demoImg from '../../assets/blue_lock_1_1.jpg';
import {useGetChapterQuery} from '../../app/services/mangaViewerApiSlice';

function MangaViewer() {
  const {data: chapters} = useGetChapterQuery();

  const nextChapter = () => { 
    
   }

   const prevChapter = () => { 

    }

  return (
    <div className="manga-viewer">
      {/* <div className="manga-viewer-chapters-volumes-panel">2</div> */}
      <div className="manga-viewer-panel">
        <img
          src={'https://i0.wp.com/mangaowl.io/wp-content/uploads/WP-manga/data/manga_62f42bda38b7f/ch-001/j001.jpg'}
          alt=""
          className="manga-viewer-current-page"
        />
        <div className="manga-viewer-controls">
          <div className="manga-viewer-controls-prev">
            <i class="fa fa-arrow-left" aria-hidden="true" onClick={nextChapter}></i>
          </div>
          <div className="manga-viewer-controls-next">
            <i class="fa fa-arrow-right" aria-hidden="true" onClick={prevChapter}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaViewer;

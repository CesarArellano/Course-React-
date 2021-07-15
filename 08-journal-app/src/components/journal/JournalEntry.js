import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          background: 'url(https://t.ipadizate.es/2020/06/macOS-Big-Sur-Vector-Wave-Wallpaper-iDownloadBlog.jpg)'
          
        }}
      >
      </div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">A new day</p>
        <p className="journal__entry-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}

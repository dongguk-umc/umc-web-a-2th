const $contentBox = document.querySelector("#contentBox");

const API_KEY = 'AIzaSyB4lP5loy0MNblA3PJNxnCAQWjgiyiMJ7A';

const FetchVedio = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=100&regionCode=KR&key=${API_KEY}`)
        .then(response => response.json())
        .then(result => result.items.map(vedio => vediocardTemplate(vedio)))
        .catch(error => console.log(error))
}

FetchVedio();

const vediocardTemplate = (data) => {
    console.log(data);
    const vedioItem = `
        <div class="videoItemContainer">
          <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
            <div class="videoThumbnailContainer"> 
              <img class="thumbnailImg" src=${data.snippet.thumbnails?.high.url} />
            </div> 
          </a>
          <div class="videoDetailsContainer">
            <a class="videoChannelLink" href=${`https://www.youtube.com/channel/${data.snippet.channelId }`}>
              <img class="channelImg" src="https://yt3.ggpht.com/8T1OF6XdiT2t5fjitlxh5KzcrqSs TbrEUxCF0JOM_fCKgWCenl0X8lvmv6NGmLVDSVsP4wZvwQ=s68-c-k-c0x00ffffff-no-rj" />
            </a>
            <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
              <div class="videoMetaDetails">
                <div class="videoTitle">
                  <h3>${data.snippet.title}</h3>
                </div>
                <div class="videoMetaData">
                  <p class="metaText">${data.snippet.channelTitle}</p>
                  <p class="extraMeta">
                    <span class="metaText viewCount">${Number(data.statistics.viewCount) > 1000 ? (Number(data.statistics.viewCount) / 1000).toFixed(0) + "K "  : Number(data.statistics.viewCount) } views</span>
                    <span class="metaText">${luxon.DateTime.fromISO(data.snippet.publishedAt).toRelative()} </span>
                  </p>
                </div> 
              </div>
            </a>
          </div>
        </div> `

    $contentBox.insertAdjacentHTML('afterbegin', vedioItem);
}
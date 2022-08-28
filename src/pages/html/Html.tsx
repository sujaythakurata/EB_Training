import "./html.scss"
import Back from "../Back";

const Html = ()=>{
  return (
    <>
      <Back/>
      <section className="main-area">
        <section>
          <h4>Video Feature</h4>
          <video  width = "300" height = "200" controls autoPlay>
            <source src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type = "video/mp4" />
            Your browser does not support the video element.
          </video>
            
          <audio controls>
              <source src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type = "audio/mp4" />
                Your browser does not support the audio element.
          </audio>
        </section>
        <section>
          <h4>Svg Feature</h4>
          <svg id = "svgelem" height = "200" xmlns = "http://www.abc.org/2000/svg">
            <circle id = "redcircle" cx = "50" cy = "50" r = "50" fill = "red" />
          </svg>
        </section>
        <section>
          <h4>Figure and Figure Caption Feature</h4>
          <figure>
            <img src="data:image/png;base64,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" alt="GFG" style={{"width":"100px"}}/>
            <figcaption>Fig.1 - Geeksforgeeks.</figcaption>
          </figure>
        </section>
        <section>
          <h4>Processing tag</h4>
          <label>Downloading progress:</label>
          <progress value="32" max="100"> 32% </progress>
        </section>
      </section>
      <section>
        <h4>This all are some Sematic tags</h4>
          <h3 className="text-default">
              {`
              <article>
              <aside>
              <details>
              <figcaption>
              <figure>
              <footer>
              <header>
              <main>
              <mark>
              <nav>
              <section>
              <summary>
              <time>`}
          </h3>
      </section>
    </>
  )
}

export default Html;
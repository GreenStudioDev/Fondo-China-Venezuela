import React from "react";
import { Forest } from "@mui/icons-material";
import "../../styles/global.css"
import "../../styles/ProjectContextSection.css"

export function ProjectContextSection() {
  return (
    <>
      <section className="container-project mt-64">
        <div className="box-header-project">
          <div className="text-align">
                <div className="box-icons-project text-icons-project">
                  <li>
                    <svg id="Capa_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345.02 374.17"><g id="Capa_1-2"><path d="m206.12,0c2.16,2.37,4.8,4.46,6.41,7.16,11,18.42,19.29,37.94,22.43,59.33,4.3,29.23-2.34,55.08-23.99,76.21-1.06,1.03-1.85,2.88-1.87,4.35-.14,13.15-.09,26.31-.06,39.46,0,.78.28,1.56.43,2.34.58-.56,1.13-1.15,1.74-1.67,4.84-4.2,6.34-9.73,7.6-15.87,5.35-26.05,21.26-44.04,44.59-55.81,20.51-10.35,42.55-14.24,65.32-14.59,6.68-.1,10.99,5.13,9.58,11.66-4,18.57-11.98,35.16-25.15,49.06-2.85,3-5.83,3.35-8.33,1.13-2.54-2.25-2.43-5.61.43-8.66,8.99-9.56,15.28-20.7,19.41-33.11.25-.75.22-1.6.32-2.41-.76.26-1.58.42-2.27.81-29.39,16.86-57.65,35.41-83.92,56.89-.63.51-1.1,1.21-1.64,1.82.89.19,1.77.54,2.66.54,15.15.16,29.79-2.23,43.64-8.68,1.68-.78,3.96-1.66,5.45-1.11,1.7.63,3.46,2.61,4.05,4.38.87,2.59-.75,4.89-3.28,5.76-8.82,3.04-17.57,6.49-26.61,8.62-11.92,2.82-24.18,2.31-36.36,1.54-1.23-.08-2.89.42-3.72,1.27-5.96,6.14-9.96,13.42-12.29,21.67-.74,2.62.13,3.31,2.72,3.49,28.51,2.01,53.9,12.07,76.25,29.86,6.67,5.31,13.38,10.56,19.95,15.98,1.79,1.48,3.06,1.37,5.12.44,3.7-1.67,7.61-3.53,11.55-3.85,8.02-.65,15.09,4.82,17.7,12.58,2.65,7.9.08,17.15-6.4,21.63-20.31,14.07-40.55,28.25-61.17,41.84-4.9,3.23-11.07,5.52-16.89,6.2-29.98,3.48-60.02,6.42-90.07,9.19-4.71.43-9.79-.35-14.35-1.72-14.9-4.45-29.67-9.35-44.43-14.26-5.29-1.76-9.78-1.1-13.72,2.9-.68.69-1.43,1.33-2.18,1.94-3.47,2.83-6.18,5.14-4.47,10.96,1.9,6.43-1.76,12.07-7.68,15.54-5.53,3.24-11.19,6.25-16.8,9.36h-6.58c-5.96-1.81-9.61-5.97-12.63-11.29-14.32-25.16-28.89-50.17-43.36-75.24-5.93-10.28-3.7-18.65,6.52-24.58,3.58-2.08,7.11-4.23,10.75-6.19,5.88-3.16,11.75-3,17.16.99,1.72,1.27,2.83,1.08,4.47.15,12.71-7.17,25.35-14.47,38.23-21.33,16.36-8.72,33.51-10.34,51.17-4.31,2.42.82,4.27.55,6.48-.65,17.45-9.48,36.09-15.03,55.95-16.16,3.38-.19,3.71-1.21,2.83-4.2-2.29-7.75-6.09-14.59-11.61-20.42-1.02-1.08-3.07-1.83-4.57-1.72-24.54,1.78-48.22-.81-69.57-14.23-23.43-14.72-36.47-36.52-41.78-63.27-1.09-5.47,2.97-10.86,8.67-10.74,33.66.69,65.35,7.43,90.53,31.99,12.55,12.24,19.01,27.58,21.86,44.8.6,3.59,4.34,6.66,6.63,9.97.36-.57,1.02-1.14,1.03-1.71.07-9.13-.41-18.29.17-27.39.58-9.03-1.64-15.85-8.13-22.94-16.32-17.8-21.09-39.86-18.7-63.5,2.47-24.45,11.76-46.53,24.53-67.26,1.21-1.96,3.39-3.31,5.11-4.95,1.71,0,3.41,0,5.12,0Zm-36.83,339.22c.04-.2.08-.39.11-.59,27.97-2.83,55.93-5.73,83.9-8.46,7.29-.71,13.95-2.61,20.06-6.91,15.53-10.92,31.24-21.58,46.88-32.34,3.61-2.48,7.3-4.86,10.8-7.49,3.41-2.57,4.02-7.53,1.63-11.17-2.35-3.58-6.1-4.4-10.21-2.23-12.9,6.82-25.84,13.56-38.7,20.46-11.01,5.91-22.71,9.16-35.15,9.97-20.53,1.34-41.05,2.76-61.57,4.13-3.91.26-6.46-1.76-6.63-5.13-.17-3.43,1.93-5.5,6.01-5.78,17.24-1.17,34.49-2.39,51.74-3.38,2.93-.17,3.4-1.34,3.21-3.78-.52-6.71-6.15-13.02-12.94-13.95-9.76-1.34-19.53-2.82-29.34-3.56-15.08-1.13-28.94-5.09-41.91-13.27-7.93-5.01-16.96-8.4-25.73-11.92-14.07-5.65-28.52-5.97-42.18.78-14.27,7.05-27.96,15.25-41.85,23.06-.59.33-1.03,2.07-.7,2.73,1.57,3.15,3.46,6.14,5.2,9.21,2.22,3.94,1.69,7.2-1.39,8.85-2.94,1.57-5.9.38-8.07-3.34-3.13-5.35-6.18-10.76-9.34-16.1-2.13-3.59-4.31-4.21-7.89-2.22-3.72,2.06-7.4,4.21-11.05,6.4-3.42,2.06-4.12,4.26-2.21,7.59,15.24,26.46,30.51,52.9,45.81,79.32,1.96,3.38,4.16,3.9,7.64,1.99,3.41-1.88,6.77-3.85,10.13-5.8,4.76-2.77,5.28-4.67,2.54-9.43-6.8-11.81-13.62-23.6-20.43-35.4-3-5.2-2.9-8.24.33-10.21,3.28-1.99,6.09-.57,9.06,4.56,4.14,7.16,8.27,14.33,12.41,21.49,3.81,6.6,3.94,6.74,9.53,1.42,7.58-7.2,16.05-8.79,25.9-5.45,14.27,4.83,28.64,9.39,43.03,13.85,3.65,1.13,7.57,1.42,11.36,2.1Zm33.06-113.25c-2.62.15-6.4.27-10.15.6-14.42,1.28-28.22,4.89-41.37,10.97-.63.29-1.19.74-1.78,1.12.6.39,1.19.81,1.82,1.16,6.29,3.44,12.48,7.08,18.91,10.21,4.87,2.37,9.9,5.02,15.13,5.89,13.06,2.17,26.26,3.55,39.43,4.98,15.05,1.62,24.08,8.45,27.33,21.09.61,2.37.8,6.21,2.16,6.7,2.15.78,5.15-.56,7.73-1.22,13.87-3.5,25.57-11.7,38.21-17.86,2.31-1.12.28-1.84-.45-2.43-5.77-4.66-11.56-9.31-17.4-13.89-23.01-18.07-49.26-26.89-79.57-27.31Zm-40.52-47.24c2.07,0,4.14.07,6.2-.03.88-.04,1.74-.42,2.62-.65-.58-.6-1.11-1.26-1.75-1.78-26.32-21.54-54.65-40.11-84.11-57.01-.66-.38-1.49-.47-2.24-.7.1.7.09,1.43.31,2.09,5.21,15.39,13.32,28.88,25.99,39.31,15.38,12.66,33.43,17.81,53,18.77Zm36.24-102.36c0-16.44,0-32.88,0-49.33,0-.7-.14-1.4-.22-2.1-.45.47-1.06.86-1.33,1.42-8.61,17.81-14.64,36.3-14.69,56.35-.04,15.83,4.32,30.24,13.83,42.98.55.74,1.32,1.32,1.99,1.97.14-.9.4-1.8.4-2.7.02-16.2.02-32.4.02-48.6Zm10.96-.41c0,16.3,0,32.6.02,48.9,0,.9.3,1.79.46,2.69.66-.65,1.42-1.23,1.97-1.97,8.39-11.22,12.88-23.89,13.62-37.84,1.17-21.87-5.2-41.99-14.55-61.38-.27-.55-.87-.95-1.32-1.41-.07.71-.2,1.41-.2,2.12-.01,16.3,0,32.6,0,48.9Zm100,37.37c-.48.06-.84.1-1.2.16-12.29,1.92-24.3,4.88-35.68,10.01-18.97,8.55-33.41,21.52-40.41,41.68-.29.85-.27,1.8-.4,2.7.71-.46,1.46-.86,2.11-1.38,19.21-15.57,39.5-29.61,60.45-42.69,4.95-3.09,9.98-6.04,14.96-9.09.46-.28.76-.83,1.13-1.25-.36-.05-.71-.1-.96-.13Zm-210.04-.66c-.07.23-.14.46-.2.69-.34.05-.68.11-1.03.16.28.36.49.84.86,1.06,2.07,1.28,4.18,2.48,6.26,3.74,24.17,14.62,47.5,30.44,69.47,48.23.65.52,1.41.91,2.12,1.35-.14-.91-.05-1.94-.46-2.72-3.26-6.22-5.97-12.84-10.05-18.47-9.38-12.94-22.65-20.9-37.51-25.96-9.62-3.28-19.62-5.43-29.46-8.08Z"/></g>
                    </svg>
                  </li>
                </div>
                <label>Agricultura</label>
          </div>
          <div className="ml-16">
            <h4 className="text-subtitle">Descripción</h4>
            <p className="description-project">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div>
        </div>
      </section>
    </>
  );
}

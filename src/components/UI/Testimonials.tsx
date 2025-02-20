// import React from "react";
// import { useRef, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
// import { Pause, Play } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Harsh Patel",
//     role: "Founder at Macro",
//     rating: 4,
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     gridArea: "a",
//   },
//   {
//     id: 2,
//     name: "Lyndon Jackson",
//     role: "Founder at Pezmix",
//     rating: 5,
//     videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
//     gridArea: "b",
//   },
//   {
//     id: 3,
//     name: "Jules Ioannidis",
//     role: "Co-founder at Gracenote",
//     rating: 5,
//     videoUrl:
//       "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
//     gridArea: "c",
//   },
//   {
//     id: 4,
//     name: "Carson Suite",
//     role: "Founder at InvolvChat",
//     rating: 5,
//     videoUrl: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
//     gridArea: "d",
//   },
//   {
//     id: 5,
//     name: "Andy Zhang",
//     role: "Co-Founder & CTO at Tower YC W24",
//     rating: 5,
//     videoUrl:
//       "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
//     gridArea: "e",
//   },
// ];
// export const Testimonials = () => {
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const videoRefs = useRef({});
//   const togglePlay = (id) => {
//     const videoElement = videoRefs.current[id];

//     if (videoElement) {
//       if (playingVideo === id) {
//         videoElement.pause();
//         setPlayingVideo(null);
//       } else {
//         // Pause all other videos
//         Object.values(videoRefs.current).forEach((video) => video.pause());

//         videoElement.play();
//         setPlayingVideo(id);
//       }
//     }
//   };
//   return (
//     <div className="w-full min-h-screen bg-black p-6">
//       <h1 className="text-3xl font-bold text-white mb-8">Testimonials</h1>

//       <div
//         className="grid gap-4 w-full max-w-7xl mx-auto"
//         style={{
//           gridTemplateAreas: `
//      "a c d"
//      "b c d"
//      "b e f"
//    `,
//           gridTemplateColumns: "1fr 1.2fr 1fr",
//           gridAutoRows: "minmax(200px, auto)",
//         }}
//       >
//         {testimonials.map((testimonial) => (
//           <Card
//             key={testimonial.id}
//             className={`relative overflow-hidden group`}
//             style={{ gridArea: testimonial.gridArea }}
//           >
//             <CardContent className="p-0 h-full">
//               <div className="relative h-full">
//                 <video
//                   src={testimonial.videoUrl}
//                   className="w-full h-full object-cover"
//                   loop
//                   muted
//                   autoPlay={playingVideo === testimonial.id}
//                 />
//                 <button
//                   onClick={() => togglePlay(testimonial.id)}
//                   className="absolute right-4 bottom-20 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
//                 >
//                   {playingVideo === testimonial.id ? (
//                     <Pause className="w-6 h-6 text-white" />
//                   ) : (
//                     <Play className="w-6 h-6 text-white" fill="white" />
//                   )}
//                 </button>
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
//                   <div className="flex mb-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="text-yellow-400">
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <h3 className="font-semibold text-lg text-white">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-300">{testimonial.role}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "../lib/utils";
// import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Harsh Patel",
    role: "Founder at Macro",
    rating: 4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    gridArea: "a",
  },
  {
    id: 2,
    name: "Lyndon Jackson",
    role: "Founder at Pezmix",
    rating: 5,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    gridArea: "b",
  },
  {
    id: 3,
    name: "Jules Ioannidis",
    role: "Co-founder at Gracenote",
    rating: 5,
    videoUrl:
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
    gridArea: "c",
  },
  {
    id: 4,
    name: "Carson Suite",
    role: "Founder at InvolvChat",
    rating: 5,
    videoUrl: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    gridArea: "d",
  },
  {
    id: 5,
    name: "Andy Zhang",
    role: "Co-Founder & CTO at Tower YC W24",
    rating: 5,
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    gridArea: "e",
  },
];

export const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const videoElement = videoRefs.current[id];

    if (videoElement) {
      if (playingVideo === id) {
        videoElement.pause();
        setPlayingVideo(null);
      } else {
        // Pause all other videos
        Object.values(videoRefs.current).forEach((video) => {
          if (video && video !== videoElement) {
            video.pause();
          }
        });

        videoElement
          .play()
          .catch((error) => console.error("Video play error:", error));
        setPlayingVideo(id);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-black p-6">
      <h1 className="text-2xl font-bold text-white text-center">
        Testimonials
      </h1>

      <h2 className="text-[40px] lg:text-[64px] text-white font-bold text-center mb-12">
        <span
          className={cn(
            "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400"
          )}
        >
          Hear it from our clients
        </span>
      </h2>

      <div
        className="grid gap-4 w-full max-w-7xl mx-auto"
        style={{
          gridTemplateAreas: `
           "a c d"
           "b c d"
           "b e f"
         `,
          gridTemplateColumns: "1fr 1.2fr 1fr",
          gridAutoRows: "minmax(200px, auto)",
        }}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative overflow-hidden group"
            style={{ gridArea: testimonial.gridArea }}
          >
            <CardContent className="p-0 h-full">
              <div className="relative h-full">
                <video
                  ref={(el) => (videoRefs.current[testimonial.id] = el)}
                  src={testimonial.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  controls
                  playsInline
                  // poster="https://via.placeholder.com/400x320"
                />

                <button
                  onClick={() => togglePlay(testimonial.id)}
                  className="absolute right-4 bottom-20 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
                >
                  {playingVideo === testimonial.id ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" fill="white" />
                  )}
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="flex mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-lg text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

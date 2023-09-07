// try {
//   function getIFrame(url) {
//     const iframe = document.createElement("iframe");
//     return (
//       iframe.setAttribute("class", "gfm-embed-iframe"),
//       iframe.setAttribute("width", "100%"),
//       iframe.setAttribute("height", "540"),
//       iframe.setAttribute("frameborder", "0"),
//       iframe.setAttribute("scrolling", "no"),
//       iframe.setAttribute("src", url + "#:~:tcm-regime=GDPR&tcm-prompt=Hidden"),
//       iframe
//     );
//   }
//   //   window.addEventListener(
//   //     "message",
//   //     function (event) {
//   //       if (event.data) {
//   //         const embed = (function (event) {
//   //           return [].slice
//   //             .call(document.getElementsByClassName("gfm-embed-iframe"))
//   //             .filter((iframe) => iframe.contentWindow === event.source)[0];
//   //         })(event);
//   //         embed.height = event.data.offsetHeight;
//   //       }
//   //     },
//   //     !1
//   //   ),
//   //     function () {
//   const embeds = document.getElementsByClassName("gfm-embed");
//   console.log("embeds -> ", embeds.length);
//   for (let i = 0; i < embeds.length; i++) {
//     const iframe = getIFrame(embeds[i].getAttribute("data-url"));
//     embeds[i].appendChild(iframe);
//   }
//   // };
// } catch (error) {
//   console.log(error);
// }

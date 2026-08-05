export function useDownloadResume() {
  const download = () => {
    window.open('/resume.pdf', '_blank'); //change
  };

  return {
    download,
  };
}

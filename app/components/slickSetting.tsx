const SlickSetting = (className: string) => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: className,
  };
};

export default SlickSetting;

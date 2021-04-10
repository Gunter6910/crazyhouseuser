import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'assets/img/slide/boxing1.jpg',
    altText: 'BOXING ROOM',
    caption: 'BOXING ROOM',
    noidung:'Boxing là một môn thể thao mới lạ có thể mang lại nhiều lợi ích cho sức khỏe thể chất và cả tinh thần. Không những vậy, việc tập boxing cũng giúp bạn có thêm nhiều kỹ năng bảo vệ bản thân khi gặp những tình huống nguy hiểm trong cuộc sống'
  },
  {
    src: 'assets/img/slide/game1.jpg',
    altText: 'GAME ROOM',
    caption: 'GAME ROOM',
    noidung:'Game thực tế ảo là loại hình trò chơi máy tính mới, với sự kết hợp của công nghệ thực tế ảo (VR). Người chơi có thể thực sự trải nghiệm góc nhìn và hành động trong game thông qua nhiều thiết bị và phụ kiện chơi game VR.'
  },
  {
    src: 'assets/img/slide/phitieu1.jpg',
    altText: 'DARTS ROOM',
    caption: 'DARTS ROOM',
    noidung:'Là một trò chơi rất đầy thú vị và rất bổ ích cho bạn và những thành viên trong gia đình xua tan đi cái mệt mỏi sau những giờ học tập , làm việc căng thẳng'
  }
];

const Slide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="1140px" height="548px" style={{color:'white'}} />
        <CarouselCaption  captionHeader={item.caption} captionText={item.noidung} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev"  directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next"  directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slide;
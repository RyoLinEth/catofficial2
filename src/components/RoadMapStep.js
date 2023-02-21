import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Paw Map"
          data-align="center"
        >
          Paw Map
        </h3>
        <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 01</span>
                    <div className="item_in">
                      {/* <p className="date">Feb. , 2023</p> */}
                      <h3 className="title">Birth</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            Marketing push to spread
                            awareness
                          </li>
                          <li>
                            Website launch
                          </li>
                          <li>
                            5000 telegram members
                          </li>
                          <li>
                            Meme development
                          </li>
                          <li>
                            CAT is Born!
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 02</span>
                    <div className="item_in">
                      {/* <p className="date">October 17, 2022</p> */}
                      <h3 className="title">Crawl</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            Influencer marketing push
                          </li>
                          <li>
                            Listing on coin gecko
                          </li>
                          <li>
                            Listing on coin market cap
                          </li>
                          <li>
                            25,000 telegram members
                          </li>
                          <li>
                            25,000 holders
                          </li>
                          <li>
                            Third party audit
                          </li>
                          <li>
                            Voluntary donation for
                            community + charity
                            partnership
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 03</span>
                    <div className="item_in">
                      {/* <p className="date">October 28, 2022</p> */}
                      <h3 className="title">Walk</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            100,000 holders
                          </li>
                          <li>
                            100,000 telegram members
                          </li>
                          <li>
                            Airdrop #2
                          </li>
                          <li>
                            Large influencer marketing push
                          </li>
                          <li>
                            Listings on major cex
                          </li>
                          <li>
                            More memes from community
                          </li>
                          <li>
                            Credit Card For crypto live on our
                            website.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 04</span>
                    <div className="item_in">
                      {/* <p className="date">November 11, 2022</p> */}
                      <h3 className="title">Run</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            150,000 holders
                          </li>
                          <li>
                            increase marketing
                          </li>
                          <li>
                            CAT Swap
                          </li>
                          <li>
                            Add way more memes
                          </li>
                          <li>
                            Website Redesign
                          </li>
                          <li>
                            CAT Paw (Paw wallet
                            growth tracker)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 05</span>
                    <div className="item_in">
                      {/* <p className="date">November 23, 2022</p> */}
                      <h3 className="title">Jump</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            300,000 holders
                          </li>
                          <li>
                            Release NFT market place for
                            CATTreats . CAT Treats will
                            be available to CAT holders
                          </li>
                          <li>
                            Give away Tesla to promote
                            eco-friendliness campaign of
                            CAT vs doge at $250m
                            market cap.
                          </li>
                          <li>
                            Memes. Everywhere.
                          </li>
                          <li>
                            $250k Donation to charity of
                            community choice at $500m
                            market cap
                          </li>
                          <li>
                            $500k Donation to animal
                            shelters for CAT $1b market
                            cap
                          </li>
                          <li>
                            Donate to Help Build
                            Homeless dog shelter at $25b
                            market cap
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 06</span>
                    <div className="item_in">
                      {/* <p className="date">December 02, 2022</p> */}
                      <h3 className="title">Moon</h3>
                      <div className="desc">
                        <ul>
                          <li>
                            Donate to help build animal
                            sanctuary at $50b market cap
                          </li>
                          <li>
                            100b market cap community
                            gathers to carve a CAT
                            into a large mountain forever
                            being locked as literally the
                            LARGEST meme history.
                          </li>
                          <li>
                            500b cap we form a
                            CAT religion. Community will
                            vote what happens.
                          </li>
                          <li>
                            1T cap worlds largest CAT meet
                            up/gathering
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 07</span>
                    <div className="item_in">
                      <p className="date">January 14, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <div className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 08</span>
                    <div className="item_in">
                      <p className="date">January 28, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <div className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 09</span>
                    <div className="item_in">
                      <p className="date">February 12, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <div className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoadMapSlider;

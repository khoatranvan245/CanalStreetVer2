import Button from '../Components/Button'
import Footer from '../Components/Footer'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introductionSection}>
                <h1>
                    Canal Street Market is a carefully curated retail market, food hall & community
                    space open year-round at 265 Canal Street.{' '}
                    <a href="/">Support Small Business</a> this weekend!
                </h1>
            </div>

            <div className={styles.imageHero}></div>

            <div className={styles.aNewKindSection}>
                <h1>A New Kind of Market</h1>
                <div className={styles.gallery}>
                    <div className={styles.block}>
                        <div className={styles.image}></div>
                        <div className={styles.description}>
                            Merging retail, food, art, and culture, Canal Street Market highlights
                            top retail and design concepts, restaurants, and up-and-coming players
                            in the downtown New York City community.
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.image}></div>
                        <div className={styles.description}>
                            Retail Market Hours:
                            <br />
                            Thursday - Sun: 11:00AM - 7:00PM
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.image}></div>
                        <div className={styles.description}>
                            Food Hall Hours:
                            <br />
                            Mon – Sun: 11:00AM - 8:00PM
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.marketEventSection}>
                <div className={styles.title}>
                    <div className={styles.block}>
                        <svg
                            width="116px"
                            height="60px"
                            viewBox="0 12 116 58"
                            version="1.1"
                        >
                            <defs></defs>
                            <g
                                id="R2"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                                fontFamily="PingFangSC-Semibold, PingFang SC"
                                fontSize="60"
                                fontWeight="500"
                                line-spacing="60"
                            >
                                <g
                                    id="1440_HP_v2-1-Copy-3"
                                    transform="translate(-172.000000, -3219.000000)"
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="0.75"
                                >
                                    <text id="事件">
                                        <tspan
                                            x="170"
                                            y="3282"
                                        >
                                            活動
                                        </tspan>
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.block}>
                        <h1>Market Events</h1>
                    </div>
                    <div className={styles.block}>
                        <svg
                            width="116px"
                            height="60px"
                            viewBox="0 12 116 58"
                            version="1.1"
                        >
                            <defs></defs>
                            <g
                                id="R2"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                                fontFamily="PingFangSC-Semibold, PingFang SC"
                                fontSize="60"
                                fontWeight="500"
                                line-spacing="60"
                            >
                                <g
                                    id="1440_HP_v2-1-Copy-3"
                                    transform="translate(-172.000000, -3219.000000)"
                                    fill="none"
                                    stroke="#000000"
                                    strokeWidth="0.75"
                                >
                                    <text id="事件">
                                        <tspan
                                            x="170"
                                            y="3282"
                                        >
                                            活動
                                        </tspan>
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className={styles.information}>
                    <div className={styles.block}>
                        <div className={styles.time}>09/21</div>
                        <div className={styles.place}>Small Business Retail Pop Up Weekend!</div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.time}>02/07</div>
                        <div className={styles.place}>
                            New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.time}>12/11</div>
                        <div className={styles.place}>Hack City 12/11</div>
                    </div>
                    <div className={styles.button}>
                        <Button
                            text="see all"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.address}>
                <a href='https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427' target='_blank'>265 Canal St.<br/> New York, NY</a>
                <a href='https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427' target='_blank'><img src='https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg?auto=compress,format'/></a>
            </div>

            <Footer/>
        </div>
    )
}

export default Home

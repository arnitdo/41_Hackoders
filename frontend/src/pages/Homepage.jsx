import ImageCard from "../components/Image";
import hero_image from '../assets/hero_image.png';
import scanner from '../assets/scanner.png';
import allergyfree from '../assets/allergyfree.png';
import sharerecipe from '../assets/sharerecipe.png';
import hero_bg from '../assets/hero_bg.png';
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import Marquee from "../components/Marquee";
export default function Homepage() {
    return (
        <>
            <div className={"w-screen min-h-screen flex flex-col justify-center items-center bg-lgreen"}>
                <div style={{backgroundImage: `url(${hero_bg})`, backgroundClip: "border-box"}} className="h-[9 0vh] w-screen bg-cover p-16 pt-0 flex flex-row justify-center items-center">
                    <div className="text-6xl font-bold flex flex-col gap-8 justify-around">
                        <p>
                           <span className="underline font-extrabold">Nutrino</span> - Where Wellness 
                           </p>
                           <div className="justify-center flex">
                            Meets Wisdom
                            </div>
                       
                        <div className="text-xl justify-center flex">

                            <Button>Let's Get Started →</Button>
                        </div>
                    </div>
                    {/* <img src={hero_image} className="h-[360px] w-[360px]" /> */}
                </div>
               <div className=" pb-10">
                 <Marquee items={["Nutrino",  "Wellness", "Wisdom", "Nutrino",  "Wellness", "Wisdom", "Nutrino",  "Wellness", "Wisdom"]}/>
                </div>
                <div className="flex flex-row gap-8">
                    <FeatureCard heading={"Effortless Product Scanning"} imageUrl={scanner} paragraph={"Scan product barcode to access detailed."}/>
                    <FeatureCard heading={"Allergy and Dietary Filters"} imageUrl={allergyfree} paragraph={"Customize your preferences & recieve notifications"} />
                    <FeatureCard heading={"Community Recipe Sharing"} imageUrl={sharerecipe} paragraph={"Share your recipe with your loved ones."}/>
                </div>
            </div>
        </>
    )
}
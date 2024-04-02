import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListFooter from "@/components/common/ListingFooter";
import Step_1 from "@/components/listHangar/Step-1";
import Step from "@/components/listHangar/Step-1";
import Step_2 from "@/components/listHangar/Step-2";
import Step_3 from "@/components/listHangar/Step-7";
import Step_4 from "@/components/listHangar/Step-4";
import Step_5 from "@/components/listHangar/Step-5";
import Step_6 from "@/components/listHangar/Step-6";
import { useState } from "react";
import Step_7 from "@/components/listHangar/Step-7";
import Step_8 from "@/components/listHangar/Step-8";
import Step_9 from "@/components/listHangar/Step-9";
import Step_10 from "@/components/listHangar/Step-10";
import Step_11 from "@/components/listHangar/Step-11";
import Step_12 from "@/components/listHangar/Step-12";
import Step_13 from "@/components/listHangar/Step-13";

const Add = () =>{

    const [isProgress, setProgress] = useState(1)

    return(
<>



{ isProgress == 1? <Step_1 /> : isProgress == 2? <Step_2 /> : isProgress == 3? <Step_3 />  : isProgress == 4? <Step_4 /> : isProgress == 5? <Step_5 /> : isProgress == 6? <Step_6 /> : isProgress == 7? <Step_7 /> : isProgress == 8? <Step_8 /> : isProgress == 9? <Step_9 /> : isProgress == 10? <Step_10 />  : isProgress == 11? <Step_11 /> : isProgress == 12? <Step_12 /> : isProgress == 13? <Step_13 /> : null}


<ListFooter onClickNext={() => setProgress(isProgress + 1)} />
</>
    )
}
export default Add;
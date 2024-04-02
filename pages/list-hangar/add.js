import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListFooter from "@/components/common/ListingFooter";
import Step_1 from "@/components/listHangar/Step-1";
import Step from "@/components/listHangar/Step-1";
import Step_2 from "@/components/listHangar/Step-2";
import Step_3 from "@/components/listHangar/Step-3";
import Step_4 from "@/components/listHangar/Step-4";
import Step_5 from "@/components/listHangar/Step-5";
import Step_6 from "@/components/listHangar/Step-6";
import { useState } from "react";

const Add = () =>{

    const [isProgress, setProgress] = useState(1)

    return(
<>



{ isProgress == 1? <Step_1 /> : isProgress == 2? <Step_2 /> : isProgress == 3? <Step_3 />  : isProgress == 4? <Step_4 /> : isProgress == 5? <Step_5 /> : isProgress == 6? <Step_6 /> : isProgress == 7? <Step_6 /> : null}


<ListFooter onClickNext={() => setProgress(isProgress + 1)} />
</>
    )
}
export default Add;
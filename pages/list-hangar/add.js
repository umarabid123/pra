import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListFooter from "@/components/common/ListingFooter";
import Step_1 from "@/components/listHangar/Step-1";
import Step from "@/components/listHangar/Step-1";
import Step_2 from "@/components/listHangar/Step-2";
import { useState } from "react";

const Add = () =>{

    const [isProgress, setProgress] = useState(1)

    return(
<>



{ isProgress == 1? <Step_1 /> : isProgress == 2? <Step_2 /> : null}


<ListFooter onClickNext={() => setProgress(isProgress + 1)} />
</>
    )
}
export default Add;
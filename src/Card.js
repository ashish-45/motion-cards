import React from 'react'
import './Card.css';
import { motion, useMotionValue, useTransform } from "framer-motion";

const Card = (props) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div>
             <h1 className="text-center">Draggable Cards</h1>

<div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}
>
    <div className="row">
        <div className="col-sm-4">
            <motion.div className="card1" style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}>
                <h3 style={{marginTop:'450px', color:'white'}}>Hello nature1</h3>
                <span style={{marginTop:'-20px',display:'none'}}>vishal yadav</span>
            </motion.div>
        </div>
        <div className="col-sm-4">
            <motion.div className="card2" style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}>
                <h3 style={{marginTop:'450px', color:'white'}}>Hello nature2</h3>
            </motion.div>
        </div>
        <div className="col-sm-4">
            <motion.div className="card3" style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}>
                <h3 style={{marginTop:'450px', color:'white'}}>Hello nature3</h3>
            </motion.div>
        </div>
    </div>

</div><br/>

<div class="alert alert-primary" role="alert">
  Drag and hold the Image and rotate it!
</div>
        </div>
       
    )
}

export default Card;

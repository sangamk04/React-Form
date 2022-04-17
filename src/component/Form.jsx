import React, {useState} from "react";
import styles from "./Form.module.css";

const Form=()=>{
    const [formData, setFormData]=useState({
        showPassword:false,
    });
    const handleChange=(e)=>{
        const inputName=e.target.name;

        if(e.target.type=="checkbox"){
            console.log(e.target.value,e.target.checked);
            setFormData({
                ...formData,
                [inputName]:e.target.checked,
            });

        }else if(e.target.type=="file"){
            setFormData({
                ...formData,
                [inputName]:e.target.files,
            });
        }else{setFormData({
            ...formData,
            [inputName]: e.target.value,
        });
}
};
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
};
return(
    <div className={styles.sam}>
    <div className={styles.form}>
        Form
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.grid}>
                    <lable className={styles.ford}>User name</lable>
                    <input type="text" name="username" onChange={handleChange}/>
                </div>
                <div className={styles.grid}>
                    <lable className={styles.ford}>Password</lable>
                    <input type={formData.showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}/>
                </div>
                <input className={styles.sun} type="checkbox" name="showPassword" onChange={handleChange}/>
                <lable className={styles.mini}>Show Password</lable>
  
<div className={styles.grid}>
    <lable className={styles.ford}>Age</lable>
    <input type="number" name="age" onChange={handleChange}/>
</div>

<div className={styles.grid}>
    <lable className={styles.ford}>DOB</lable>
    <input type="date" name="dob" onChange={handleChange}/>
</div>

<div className={styles.grid}>
    <lable className={styles.ford}>Resume</lable>
    <input type="file" name="resume" onChange={handleChange}/>
</div>

<div className={styles}>
    <input  className={styles.sangam}type="submit" name="submit" />
</div>
</form>
</div>
</div>

</div>
);
};
export default Form;
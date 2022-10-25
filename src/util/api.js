//get all courses data
export const getCourses = async () => {
    try {
        const res = await fetch('https://lms-server-jakia12.vercel.app/api/courses');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}



// 
// https://hotels-server-two.vercel.app/api/hotels
//get single course data 

export const getSingleCrsData = async (id) => {
    try {
        const res = await fetch(`https://lms-server-jakia12.vercel.app/api/course/${id}`);

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}
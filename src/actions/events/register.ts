// "use server"
// import connectDB from "@/lib/mongodb";
// import Events from "@/models/Events";

// export const register = async (values: any) => {
//     console.log(values)
//     try {
//         await connectDB();
//         const event = new Events(values);
//         const result = await event.save();
//         return result;
//     } catch (error) {
//         console.error(error);
//         return Promise.reject(error);
//     }
// }
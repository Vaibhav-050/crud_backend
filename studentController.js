import studentModel from "../models/Student.js";
class studentController {

    static createDoc = async (req, res) => {
        // console.log("create doc post method");
        //console.log(req.body.name);
        try {
            const { name, age, fees } = req.body;
            const studentDoc = new studentModel({
                //method:1
                //  name: req.body.name,
                // age: req.body.age,
                // fees: req.body.fees
                //method:2
                //name,
                // age,
                // fees
                //method 3
                name: name,
                age: age,
                fees: fees
            })

            const result = await studentDoc.save();
            console.log(result);
            res.redirect("/student");
        } catch (error) {
            console.log(error);

        }
    }


    static getAllDoc = async (req, res) => {

        try {
            const result = await studentModel.find()
            //console.log(result);
            res.render("index", { data: result })
        }
        catch (error) {
            res.redirect("/student");
        }
    }

    static editDoc = async (req, res) => {
        //console.log(req.params.id);
        try {
            const result = await studentModel.findById(req.params.id);
            //  console.log(result);
            res.render("edit", { data: result });
        } catch (error) {
            console.log(error);
        }

    }
    static deleteDocById = async (req, res) => {
        try {
           // console.log(req.params.id);
           const result = await studentModel.findByIdAndDelete(req.params.id);
            res.redirect("/student"); //path
        } catch (error) {
            
        }
        
    }

    static updateDocById = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id,{ // or we can directly write req.body
                name: req.body.name,
                 age: req.body.age,
                 fees: req.body.fees
            });
             res.redirect("/student");
        } catch (error) {

        }

    }
}
export default studentController;
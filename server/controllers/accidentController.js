const Accident = require("../models/Accident")



exports.getAccidents = async (req, res) => {

  try {

    const accidents = await Accident.find()

    res.json(accidents)

  }

  catch (error) {

    console.log(error)

    res.status(500).json({ message: "Server error" })

  }

}



exports.createAccident = async (req, res) => {

  try {

    const accident = await Accident.create(req.body)

    res.status(201).json(accident)

  }

  catch (error) {

    console.log("Error creating accident:", error)

    res.status(400).json({

      message: "Invalid data"

    })

  }

}

exports.updateAccident = async (req, res) => { 
    try {
        const accident = await Accident.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!accident) {
            return res.status(404).json({ message: "Accident not found" });
        }
        res.json(accident);
    }
    catch (error) {
        console.log("Error updating accident:", error);
        res.status(400).json({ message: "Invalid data" });
    }
}

exports.deleteAccident = async (req, res) => {
    try {
        const accident = await Accident.findByIdAndDelete(req.params.id);
        if (!accident) {
            return res.status(404).json({ message: "Accident not found" });
        }
        res.json({ message: "Accident deleted" });
    }
    catch (error) {

        console.log("Error deleting accident:", error);
        res.status(500).json({ message: "Server error" });
    }
}
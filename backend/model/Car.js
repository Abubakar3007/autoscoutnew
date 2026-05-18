import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    vehicleData: {
        brand: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        variant: {
            type: String,
            required: true
        }
    },
    characteristics: {
        body_type: {
            type: String,
        },
        doors: {
            type: String,
            required: true,
        },
        seats: {
            type: String,
            required: true
        }
    },
    color: {
        exterior_color: {
            type: String,
        },
        interior_color: {
            type: String
        },
        interior_decoration: {
            type: String
        }
    },
    vehicleCondition: {
        vehicle_type: {
            type: String,
        },
        mileage: {
            type: String,
            required: true
        },
        registration: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true
        },
        next_inspection: {
            type: String,
        },
        last_inspection: {
            type: String,
        },
        belt_change: {
            type: String,
        },
        accident_vehicle: {
            type: Boolean,
            default: false
        },
        no_smoking: {
            type: Boolean,
            default: false,
        },
    },
    furnishing: {
        airbags: {
            type: [String],
        },
        assistance: {
            type: [String],
        },
        parking: {
            type: [String],
        },
        extras: {
            type: [String],
        },
        air_condition: {
            type: [String],
        },
        comfort: {
            type: [String],
        },
        light: {
            type: [String],
        },
        security: {
            type: [String],
        },
        seats: {
            type: [String],
        },
        cruise_control: {
            type: [String],
        },
        entertainment: {
            type: [String],
        },
        media: {
            type: [String],
        },
        locking: {
            type: [String]
        }
    },
    drive: {
        drive_type: {
            type: String,
        },
        gear_box: {
            type: String,
        },
        performance: {
            type: String
        },
        cylinders: {
            type: String,
        },
        gears: {
            type: String
        },
        displacement: {
            type: String
        },
        curb: {
            type: String,
        }
    },
    environment: {
        fuel: {
            type: String
        },
        energy_source: {
            type: String,
        },
        combined_fuel_consumption: {
            type: String,
        },
        emissions_combined: {
            type: String
        },
        emission_class: {
            type: String
        }
    },
    picture: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    contact: {
        zip: {
            type: String,
            required: true
        },
        city: {
            type: String,
        },
        country_code: {
            type: String
        },
        phone: {
            type: Number
        }
    },
},
    {
        timestamps: true
    }
);

const Car = mongoose.model("Car", carSchema);
export default Car;
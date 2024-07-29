import mongoose from 'mongoose';

// Define schemas
const EventDetailsSchema = new mongoose.Schema({
    evento: { type: String, required: true },
    idsYoutube: { type: [String], default: [] },
    linkInstagram: { type: [String], default: [] },
    fotos: { type: [String], default: [] },
    anteproyecto: { type: String, default: null },
    proyecto: { type: String, default: null },
    reforma: { type: String, default: null }
}, { _id: false }); // _id: false para evitar IDs anidadas innecesarias

const OtrosEventosSchema = new mongoose.Schema({
    evento: { type: String, required: true },
    idsYoutube: { type: [String], default: [] },
    linkInstagram: { type: [String], default: [] },
    eventoImagen: {
        type: [{
            linkImagen: { type: [String], default: [] },
            titulo: { type: String, required: true },
            descripcion: { type: String, required: true }
        }],
        default: []
    }
}, { _id: false });

const EventosSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    estado: { type: Boolean, required: true }
}, { _id: false });

const EventSchema = new mongoose.Schema({
    date: { type: Date, required: true, index: true }, // Index para mejorar consultas por fecha
    eventos: { type: [EventosSchema], required: true },
    pleno: { type: EventDetailsSchema, default: null },
    salud: { type: EventDetailsSchema, default: null },
    educacion: { type: EventDetailsSchema, default: null },
    otros: { type: OtrosEventosSchema, default: null }
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Middlewares
EventSchema.pre('save', function (next) {
    console.log('Evento va a ser guardado:', this);
    next();
});

// Model definition
export default mongoose.models.Event || mongoose.model('Event', EventSchema);

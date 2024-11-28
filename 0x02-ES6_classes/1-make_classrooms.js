// Importer la classe ClassRoom depuis 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implémenter la fonction initializeRooms
const initializeRooms = () => {
    // Créer un tableau avec les tailles de classe
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
    return rooms; // Retourner le tableau de salles de classe
};

// Exporter la fonction
export default initializeRooms;


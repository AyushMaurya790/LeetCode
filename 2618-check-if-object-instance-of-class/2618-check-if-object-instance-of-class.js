var checkIfInstanceOf = function(obj, classFunction) {
    // Agar class valid function nahi hai to false
    if (obj === null || obj === undefined) return false;
    if (typeof classFunction !== "function") return false;

    // Primitive ko wrapper object me convert kar do
    let current = Object(obj);

    // Prototype chain check karo
    while (current !== null) {
        if (current.constructor === classFunction) return true;
        current = Object.getPrototypeOf(current);
    }

    return false;
};
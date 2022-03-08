const engine = [
    {
        name: 'simple',
        cost: 100,
        speed: 10,
        fuel: 2,
        level: 1,
    },
    {
        name: 'basic',
        cost: 200,
        speed: 14,
        fuel: 3,
        level: 2,
    },
    {
        name: 'speed',
        cost: 400,
        speed: 20,
        fuel: 4,
        level: 3,
    },
    {
        name: 'speed',
        cost: 1000,
        speed: 20,
        fuel: 5,
        level: 4,
    }
];

const directions = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 }
};

function Point(point) {
    const set = (x, y) => point = { x, y };
    const add = p => set(point.x + p.x, point.y + p.y);
    return {
        point, set, add
    }

}

function move(pos, direction, len) {
    const { x, y } = pos;
    const lenDirection = direction * len;
    const newX = pos.x *
    
    return

}

const engineDefault = engine[0];
const naveDefault = {
    x: 0,
    y: 0,
    fuel: 1000,
    speed: 0,
    engine: engineDefault,
    didirection:
};

function naveModel(nave) {

}
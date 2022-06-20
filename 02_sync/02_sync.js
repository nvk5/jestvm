class Lodash {
    compact(array) {
        return array.filter(val => !!val)
    }

    groupBy(array, props) {
        return array.reduce((acc, item) => {
            const key = typeof props === 'function' ? props(item) : item[props]

            if (!acc[key]) {
                acc[key] = []
            }

            acc[key].push(item);

            return acc;
        }, {})
    }
}

module.exports = Lodash
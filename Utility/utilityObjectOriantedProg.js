module.exports = {
    inventory(data) {
        var rice = data.rice;
        var wheat = data.wheat;
        var pulses = data.pulses;
        var i = 0;
        var valueOfRice = 0;
        var valueOfWheat = 0;
        var valueOfPulses = 0;

        for (let key in rice) {
            var num = rice[key].weight * rice[key].price;
            console.log("cost of " + rice[i].name + " is :" + num + "Rs");
            i++;
            valueOfRice = valueOfRice + num;
        } i = 0
        console.log("total cost of rice: " + valueOfRice + "Rs");
        console.log();

        for (let key in wheat) {
            var num = wheat[key].weight * wheat[key].price;
            console.log("cost of " + wheat[i].name + " is :" + num + "Rs");
            i++;
            valueOfWheat = valueOfWheat + num;
        } i = 0;
        console.log("total cost of wheat: " + valueOfWheat + "Rs");
        console.log();

        for (let key in pulses) {
            var num = pulses[key].weight * pulses[key].price;
            console.log("cost of " + pulses[i].name + " is :" + num + "Rs");
            i++;
            valueOfPulses = valueOfPulses + num;
        }
        console.log("total cost of pulses :" + valueOfPulses + "Rs");

    }
}
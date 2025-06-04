(function() {
    const synodicMonth = 29.53058867; // length of a lunar month in days
    const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14));

    function moonInfo(date) {
        const diff = date.getTime() - knownNewMoon.getTime();
        const days = diff / 86400000; // milliseconds per day
        const age = ((days % synodicMonth) + synodicMonth) % synodicMonth;

        const phases = [
            { name: 'New Moon', limit: 1.84566 },
            { name: 'Waxing Crescent', limit: 5.53699 },
            { name: 'First Quarter', limit: 9.22831 },
            { name: 'Waxing Gibbous', limit: 12.91963 },
            { name: 'Full Moon', limit: 16.61096 },
            { name: 'Waning Gibbous', limit: 20.30228 },
            { name: 'Last Quarter', limit: 23.99361 },
            { name: 'Waning Crescent', limit: 27.68493 }
        ];

        let phase = 'New Moon';
        for (const p of phases) {
            if (age <= p.limit) {
                phase = p.name;
                break;
            }
        }
        return { age, phase };
    }

    function update() {
        const now = new Date();
        const info = moonInfo(now);
        document.getElementById('phase').textContent = `Current phase: ${info.phase}`;

        const daysUntilNew = synodicMonth - info.age;
        const nextNew = new Date(now.getTime() + daysUntilNew * 86400000);
        const half = synodicMonth / 2;
        const daysUntilFull = info.age <= half ? half - info.age : synodicMonth + half - info.age;
        const nextFull = new Date(now.getTime() + daysUntilFull * 86400000);

        document.getElementById('next-dates').textContent =
            `Next new moon: ${nextNew.toDateString()} | Next full moon: ${nextFull.toDateString()}`;
    }

    document.addEventListener('DOMContentLoaded', update);
})();

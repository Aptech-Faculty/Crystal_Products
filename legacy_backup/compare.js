document.addEventListener('DOMContentLoaded', function () {
    const crystalDatabase = [
        {
            id: 'diamond',
            name: 'Diamond Crystal',
            image: encodeURI('Diamond Jewellery at Michael Hill Canada/32614.alt1_1080x.webp'),
            price: 'Premium • ₹9,999',
            type: 'Carbon (C)',
            color: 'Clear / Ice',
            chakra: 'Crown',
            healing: 'Clarity, protection, amplification',
            origin: 'Africa, Russia',
            hardness: '10',
            meaning: 'Power & Purity'
        },
        {
            id: 'amber',
            name: 'Amber Crystal',
            image: encodeURI('Amber Crystals/imgi_5_baltic-amber-healing-crystal_6.jpg'),
            price: 'Accessible • ₹1,299',
            type: 'Fossilized Resin',
            color: 'Honey / Golden',
            chakra: 'Solar Plexus',
            healing: 'Energy cleansing, warmth, confidence',
            origin: 'Baltic Region',
            hardness: '2–2.5',
            meaning: 'Warmth & Healing'
        },
        {
            id: 'amethyst',
            name: 'Amethyst',
            image: encodeURI('amthyst/imgi_47_Shubhanjali-Amethyst-Stone-Pyramid-1.jpg.webp'),
            price: 'Accessible • ₹1,299–1,799',
            type: 'Quartz variety',
            color: 'Purple / Violet',
            chakra: 'Third Eye / Crown',
            healing: 'Calmness, intuition, stress relief',
            origin: 'Brazil, Uruguay',
            hardness: '7',
            meaning: 'Peace & Intuition'
        },
        {
            id: 'rose-quartz',
            name: 'Rose Quartz',
            image: 'crystale images/rose pendant.webp',
            price: 'Accessible • ₹999',
            type: 'Quartz',
            color: 'Pink / Rose',
            chakra: 'Heart',
            healing: 'Love, compassion, emotional healing',
            origin: 'Madagascar, Brazil',
            hardness: '7',
            meaning: 'Unconditional Love'
        },
        {
            id: 'citrine',
            name: 'Citrine',
            image: 'crystale images/imgi_110_Citrine-Crystal-Meaning-Benefits-and-Uses-1024x682.jpg',
            price: 'Medium • ₹1,200',
            type: 'Quartz',
            color: 'Yellow / Orange',
            chakra: 'Solar Plexus / Sacral',
            healing: 'Success, abundance, creativity',
            origin: 'Brazil, Bolivia',
            hardness: '7',
            meaning: 'Prosperity & Joy'
        },
        {
            id: 'tiger-eye',
            name: 'Tiger Eye',
            image: 'crystale images/imgi_151_659bed50abde1.webp',
            price: 'Accessible • ₹899',
            type: 'Chalcedony',
            color: 'Brown / Gold',
            chakra: 'Solar Plexus',
            healing: 'Protection, courage, focus',
            origin: 'South Africa, Australia',
            hardness: '6.5–7',
            meaning: 'Strength & Confidence'
        }
    ];

    const selects = [
        document.getElementById('select1'),
        document.getElementById('select2'),
        document.getElementById('select3')
    ];

    const resetBtn = document.getElementById('resetBtn');

    function initDropdowns() {
        selects.forEach(select => {
            while (select.options.length > 1) {
                select.remove(1);
            }

            crystalDatabase.forEach(crystal => {
                const option = document.createElement('option');
                option.value = crystal.id;
                option.textContent = crystal.name;
                select.appendChild(option);
            });

            select.addEventListener('change', (e) => {
                const columnIndex = selects.indexOf(e.target) + 1;
                const crystalId = e.target.value;
                updateComparisonColumn(columnIndex, crystalId);
            });
        });
    }

    function updateComparisonColumn(colIndex, crystalId) {
        const crystal = crystalDatabase.find(c => c.id === crystalId);
        if (!crystal) return;

        const fields = ['price', 'type', 'color', 'chakra', 'healing', 'origin', 'hardness', 'meaning'];

        const imgCell = document.getElementById(`img${colIndex}`);
        if (imgCell) {
            imgCell.innerHTML = `<img src="${crystal.image}" alt="${crystal.name}" class="img-fluid my-img" style="max-width:150px; height:auto; border-radius:8px;">`;
        }

        fields.forEach(field => {
            const cell = document.getElementById(`${field}${colIndex}`);
            if (cell) {
                cell.innerText = crystal[field];
            }
        });
    }

    resetBtn.addEventListener('click', () => {
        selects.forEach((select, index) => {
            select.selectedIndex = 0;
            const colIndex = index + 1;

            const imgCell = document.getElementById(`img${colIndex}`);
            if (imgCell) imgCell.innerHTML = '';

            const fields = ['price', 'type', 'color', 'chakra', 'healing', 'origin', 'hardness', 'meaning'];
            fields.forEach(field => {
                const cell = document.getElementById(`${field}${colIndex}`);
                if (cell) cell.innerText = '-';
            });
        });
    });

    initDropdowns();
});
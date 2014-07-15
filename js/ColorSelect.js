var ColorSelect = function (options) {
    var settings = {
            selectors: {
                container: '',
                checkButtons: '',
                oneMoreTimeButton: '',
                counter: '',
                maxCounter: ''
            },
            colors: [
                ['bda231', 'deb827', 'fcd307', 'fde993', 'fdf6ca'],
                ['b1852e', 'd09b2b', 'fab917', 'fed88f', 'ffeec2'],
                ['a36326', 'cd7c2a', 'f7941f', 'fdc787', 'fee0be'],
                ['9e4924', 'c95e28', 'f36d24', 'fab280', 'fad7bb'],
                ['9e1d22', 'c52031', 'ec1b3b', 'f69686', 'facbb9'],
                ['6d1e5f', '872578', 'a2248f', 'c78dc0', 'e0c2dc'],
                ['3a2162', '4d2d78', '5d2f91', '9c84be', 'c6bddc'],
                ['1e3c72', '0e4b8e', '105caa', '8097cd', 'c8c9e5'],
                ['064c7f', '0e5e9d', '0773bb', '7ba6d9', 'b8cbe9'],
                ['0b7575', '139092', '1baaae', '77ccd1', 'aad0d1'],
                ['10793e', '189746', '2cb34c', '9cd29e', 'cce6cb'],
                ['6c8f35', '89ad41', 'a6ce3a', 'cfe39b', 'e6f0cd']
            ],
            colorSectors: [
                'Желтый',
                'Желто-оранжевый',
                'Оранжевый',
                'Оранжево-красный',
                'Красный',
                'Красно-фиолетовый',
                'Фиолетовый',
                'Фиолетово-синий',
                'Синий',
                'Сине-зеленый',
                'Зеленый',
                'Зелено-желтый'
            ]
        };
    $.extend(true, settings, options);

    this.settings = settings;

    this.$container = $(settings.selectors.container);
    this.$checkButtons = $(settings.selectors.checkButtons);
    this.$oneMoreTimeButton = $(settings.selectors.oneMoreTimeButton);
    this.$counter = $(settings.selectors.counter);
    this.$maxCounter = $(settings.selectors.maxCounter);

    this.bindEvents();
    this.oneMoreTime();
};

ColorSelect.prototype.oneMoreTime = function () {
    this.selectedColorSector = Math.floor((Math.random() * this.settings.colorSectors.length));

    var selectedColors = this.settings.colors[this.selectedColorSector];
    this.$container.css('background', '#' + selectedColors[Math.floor((Math.random() * selectedColors.length))])
};

ColorSelect.prototype.handleChoice = function (sector) {
    if (sector == this.selectedColorSector) {
        this.incCounter();
        this.recalcMaxCounter();
        this.oneMoreTime();
    } else {
        this.resetCounter();
    }
};

ColorSelect.prototype.resetCounter = function ()
{
    this.$counter.text(0);
};

ColorSelect.prototype.incCounter = function ()
{
    this.$counter.text(parseInt(this.$counter.text()) + 1);
};

ColorSelect.prototype.recalcMaxCounter = function ()
{
    if (+(this.$counter.text()) > +(this.$maxCounter.text())) {
        this.$maxCounter.text(this.$counter.text());
    }
};

ColorSelect.prototype.bindEvents = function () {
    var self = this;

    this.$oneMoreTimeButton.bind('click', function () {
        event.preventDefault();
        self.oneMoreTime();
    });

    this.$checkButtons.bind('click', function () {
        event.preventDefault();
        self.handleChoice($(this).data('sector'));
    });
};


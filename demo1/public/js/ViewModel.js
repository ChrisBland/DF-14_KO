function ForcasetViewModel() {
    var self = this;
    self.showDetails = ko.observable(false);
    self.users = ko.observableArray([
        new User('Chris', [
            new Opportunity('123', '$100 Gen Worth', 100, 'Closed Lost'),
            new Opportunity('123', '$400 Cirus', 400, 'Closed Won'),
            new Opportunity('123', '$800 Cirus', 800, 'Prospecting')
        ]),
        new User('Billy', [
            new Opportunity('123', '$500 Gen Worth', 500, 'Closed Lost'),
            new Opportunity('123', '$400 Cirus', 400, 'Closed Won'),
            new Opportunity('123', '$800 Cirus', 800, 'Prospecting')
        ])
    ]);
    self.toggleDetails = function(){
        self.showDetails(!self.showDetails());
    };

    self.addMoney = function(opportunity){
        opportunity.Amount(opportunity.Amount()+1000);
    }
}

function formatCurrency(value) {
    return "$" + value().toFixed(2);
}

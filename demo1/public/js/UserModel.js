function User(Name, opportunities) {
    var self = this;
    self.Name = ko.observable(Name);
    self.opportunities = ko.observableArray(opportunities);
    
    self.won = ko.computed(function() {
        var total = 0;
        for(var i = 0; i < self.opportunities().length; i++){
          if(self.opportunities()[i].StageName() === 'Closed Won'){
            total += self.opportunities()[i].Amount();
          }
        }
        return total;
    });

    self.prospecting = ko.computed(function() {
        var total = 0;
        for(var i = 0; i < self.opportunities().length; i++){
          if(self.opportunities()[i].StageName() === 'Prospecting'){
            total += self.opportunities()[i].Amount();
          }
        }
        return total;
    });

    self.lost = ko.computed(function() {
        var total = 0;
        for(var i = 0; i < self.opportunities().length; i++){
          if(self.opportunities()[i].StageName() === 'Closed Lost'){
            total += self.opportunities()[i].Amount();
          }
        }
        return total;
    });
}

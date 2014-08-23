function Opportunity(Id, Name, Amount, StageName) {
    var self = this;
    self.Id = Id;
    self.Name = ko.observable(Name);
    self.StageName = ko.observable(StageName);
    self.Amount = ko.observable(Amount);
}

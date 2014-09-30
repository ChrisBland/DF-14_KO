
Using Fieldsets With KnockoutJS
---

All contacts would be loaded in the controller like this:

	public List<Contact> GetContacts()
	{
		String query = BuildQuery(SObjectType.Contact.FieldSets.ContactDetail)
	                	+ ', FirstName, LastName '
	               		+ ' from Contact where Id = : contactId and RecordType.DeveloperName = \'Client\'';

	    return Database.Query(query);
	}

Which uses this re-usable utility method:

	private static String BuildQuery(Schema.FieldSet fs)
	{
		String query = 'select Id ';

		for(Schema.FieldSetMember fsm : fs.GetFields())
		{
				query += ', ' + fsm.GetFieldPath();
		}

		return query;
	}

The contacts are stored in the view model in a `ko.observablearray`:

	self.contacts = ko.observablearray();

	KnockoutServices.GetContacts(null, function(result, event)
	{
		self.contacts(result);
	});

The user would select a contact from a list to see the details of that contact:

	self.selectContact = function(contact)
	{
		self.selectedContact(contact);
	};

The *View* for a selected contact would like this:

	<dl data-bind="with: selectedContactDetail, visible: selectedContact">
		<apex:repeat value="{!$ObjectType.Contact.FieldSets.ContactDetail}" var="f">
			<dt>
				<apex:outputText value="{!f.Label}" escape="false"/>
			</dt>
			<dd>
				<span data-bind="{!IF(CONTAINS(f.type, 'date'), 'date', 'html')}: $data.{!f}"></span>
			</dd>
		</apex:repeat>
	</dl>

Which uses this custom binding:

	ko.bindingHandlers.date = 
	{
		init: function(e, value)
		{
			if(value())
			{
				var date = new Date(value());
				jq(e).text(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
			}
			else
			{
				jq(e).text("--");
			}
		}
	};

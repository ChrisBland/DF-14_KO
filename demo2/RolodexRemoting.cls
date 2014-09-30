global class RolodexRemoting
{
    public RolodexRemoting(ApexPages.StandardController sc){}
    
    @RemoteAction
    global static List<Contact> LoadContacts(Id accountId)
    {
        return [select Id, Name, Email, Phone
                from Contact where AccountId = :accountId
               	order by LastName asc];
	}

	@RemoteAction
	global static void SaveContact(Contact c)
	{
		upsert c;
	}
}
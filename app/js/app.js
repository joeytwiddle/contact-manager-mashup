window.ContactManager = {
  Models: {},
  Collections: {},
  Views: {},
  ReactViews: {},

  start: function(data) {
    var contacts = new ContactManager.Collections.Contacts(data.contacts),
        router = new ContactManager.Router();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      var contactsView = new ContactManager.Views.Contacts({
        collection: contacts
      });

      //$('.main-container').html(contactsView.render().$el);

      // I know this is naughty; we should persist the element rather than create it new each time.
      // In fact I think react might re-render it automatically...

      var reactContactsViewInstance = React.createElement(
        ContactManager.ReactViews.Contacts,
        { contacts: contacts }
      );

      ReactDOM.render( reactContactsViewInstance, $('.main-container')[0] );

      //var html = $('.main-container').html();
      //console.log("[app.js] html:", html);
    });

    router.on('route:newContact', function() {
      var newContactForm = new ContactManager.Views.ContactForm({
        model: new ContactManager.Models.Contact()
      });

      newContactForm.on('form:submitted', function(attrs) {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      });

      $('.main-container').html(newContactForm.render().$el);
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id),
          editContactForm;

      if (contact) {
        editContactForm = new ContactManager.Views.ContactForm({
            model: contact
        });

        editContactForm.on('form:submitted', function(attrs) {
          contact.set(attrs);
          router.navigate('contacts', true);
        });

        $('.main-container').html(editContactForm.render().$el);
      } else {
        router.navigate('contacts', true);
      }
    });

    Backbone.history.start();
  }
};

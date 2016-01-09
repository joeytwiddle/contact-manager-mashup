ContactManager.Views.Contacts = Backbone.View.extend({
  template: _.template($('#tpl-contacts').html()),

  renderOne: function(contact) {
    var itemView = new ContactManager.Views.Contact({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
});

ContactManager.ReactViews.Contacts = React.createClass({
  displayName: 'Contacts',
  render: function () {

    // It would be better to make this a component (separate and re-usable)
    var createContact = function (contact) {
      return React.createElement('div', {
        children: [
          React.createElement('img', {
            className: "media-object",
            src: "app/img/faces/" + contact.get('avatar')
          })
        ]
      });
    }

    //return React.createElement('div', null, "Hello Mum");

    console.log("[contacts.js] this.props.contacts:", this.props.contacts);

    return React.createElement('ul', {
      children: this.props.contacts.map(createContact)
    });
  }
});

    /*
     * More template to complete later

      <div class="thumbnail">
        <img class="media-object" src="app/img/faces/<%- avatar %>">
      </div>
      <div class="media-heading">
        <h3>
          <%- name %>
          <small>
            <a href="#contacts/edit/<%- id %>"><span class="glyphicon glyphicon-pencil"></span></a>
            <a href="#contacts/delete/<%- id %>" class="delete-contract">
              <span class="glyphicon glyphicon-trash"></span>
            </a>
          </small>
        </h3>
      </div>
      <div class="media-body">
        <dl>
          <dt>Phone Number:</dt>
          <dd><%- tel %></dd>
          <dt>Email:</dt>
          <dd><%- email %></dd>
        </dl>
      </div>
      <hr>
    */

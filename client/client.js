// client.js
  Meteor.subscribe('testcases');
  Meteor.subscribe('backup');

  Template.testcases.listCases = function(){
    return _.sortBy(Testcases.find({}).fetch(), function(num){ 
      return parseInt(num.nid); 
    });
    //{fields: {'other': 1, 'things': 1}}
  };

  Template.testcases.count = function(){
    return Testcases.find({}).count();
  };

  Template.testcases.maxindex = function(){
    var t = Testcases.find({},{'nid':1}).map(function (post) {
      return parseInt(post.nid);
    });
    return _.max(t)+1;
  };

  Template.testcases.helpers({
    maxindex2: function () {
      // body...
      return {};
    }
  });

  Template.edit_form.case = function(){
    var t = Testcases.findOne(Session.get('selected'));
    if(!!!t){
      var c = Template.testcases.maxindex();
      return {'nid':c};
    }
    return t;
  };

  Template.edit_form.events(
    {
      'click input[type="button"]':function (e,t) {
        // template data, if any, is available in 'this'
        e.preventDefault();
        // t=str.match(/casper.waitForSelector\("([^"]*)/g)
        // _.map(t,function(e){return e.substring(24)})

        var data = $(t.find('form')).serializeArray();
        var arr = {};
        _.map(data,function(e){
          // if(e.name=='nid') arr[e.name] = parseInt(e.value);
          arr[e.name] = e.value;
        });
        if(arr.product==='') {
          alert('Product name is required!');
          return false;
        }
        var testcase = _.omit(arr,'_id');
        // arr.created = new Date();
        // if(!!arr._id) Testcases.remove(arr._id);
        // Testcases.insert(arr);
        // console.log(arr);
        if(!!Session.get('selected')){
          console.log(Session.get('selected'));
          
          if(Session.get('selected') == arr._id){
            console.log('update');
            Testcases.update({_id:Session.get('selected')}, {$set: testcase});
          }else console.log('not updated');
          
        }else{
          console.log('insert');
          Testcases.insert(testcase);
        }
        $(e.target).val('Saved!').addClass('btn-success');
            // alert('Saved');
      }
    });

  Template.testcases.events({
    'keyup input[type="search"]' : function (e,t) {
      // template data, if any, is available in 'this'
      e.preventDefault();
      if (e.keyCode==13){
         var v = t.find('input[type="search"]');
          console.log($(v).val());
      }
    },
	'click .add_testcase': function(e,t){
		e.preventDefault();
		// Session.set('case',{"nid": c});
    Session.set('selected',null);
	},
	'click .edit_case' : function (e,t) {
		e.preventDefault();
		// Session.set('case',this);
    Session.set('selected',this._id);
		Backup.insert(_.omit(this,'_id'));
    console.log($('input[name="exist"]'));
    // $('input[name="exist"]').tagsinput('add','dffdf');
    },
    'click .delete_case' : function (e,t) {
    e.preventDefault();
    // Session.set('case',this);
      if(confirm('Are you sure to remove this test case ('+this.nid+') ?')){
        Testcases.remove({_id:this._id});
      }
    }
  });
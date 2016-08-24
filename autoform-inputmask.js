
import {AutoForm}   from 'meteor/aldeed:autoform';
import {Template}   from 'meteor/templating';
import {moment}     from 'meteor/momentjs:moment';
import {_}          from 'meteor/underscore';
import './autoform-inputmask.html';

AutoForm.addInputType('inputmask', {
    template: 'ksrvInputmask',
    valueOut: function() {
        if (this.data('clean')) {
            return this.inputmask('unmaskedvalue');
        } else if (this.data('date-format')) {
            return moment(this.val(), this.data('date-format')).toDate();
        } else {
            return this.val();  
        }
    }
});

Template.ksrvInputmask.onRendered(function() {
    let mask    = this.data.atts.mask || null;
    let maskOptions = this.data.atts.maskOptions || null;
    let $input  = this.$('input');

    if (mask) {
        if (maskOptions) {
            maskOptions = _.omit(maskOptions, 'clean');
            $input.inputmask(mask, maskOptions);
        } else {
            $input.inputmask(mask);
        }
    }
});

Template.ksrvInputmask.helpers({
    atts () {
        let atts = _.clone(this.atts);
        atts = AutoForm.Utility.addClass(atts, "form-control");
        if (atts.maskOptions) { 
            if (atts.maskOptions.clean) {
                atts['data-clean'] = true;
            }
            if(atts.maskOptions.dateFormat) {
                atts['data-date-format'] = atts.maskOptions.dateFormat;
            }
        }
        return _.omit(atts, 'mask', 'maskOptions');
    }
});
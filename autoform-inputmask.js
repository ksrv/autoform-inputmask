
import {AutoForm}   from 'meteor/aldeed:autoform';
import {Template}   from 'meteor/templating';
import {moment}     from 'meteor/momentjs:moment';
import {_}          from 'meteor/underscore';
import './autoform-inputmask.html';

AutoForm.addInputType('inputmask', {
    template: 'ksrvInputmask',
    valueOut () {
        let value = this.val();
        if ( this.data('clean') ) {
            return this.inputmask('unmaskedvalue');
        } else if ( value && this.data('date-format') ) {
            return moment(value, this.data('date-format')).toDate();
        } else {
            return value;  
        }
    },

    contextAdjust (context) {
        let atts = context.atts || {};
        let maskOptions = atts.maskOptions || {};

        if (maskOptions.dateFormat) {
            context.value = moment(context.value).format(maskOptions.dateFormat);
            // Do not clean mask if use dateFormat
            delete context.atts.maskOptions.clean;
        }

        // Use HTML attribute "placeholder"
        if (maskOptions.placeholder) {
            context.atts.placeholder = maskOptions.placeholder;
            delete maskOptions.placeholder;
        }

        return context;
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
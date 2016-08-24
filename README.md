# ksrv:autoform-inputmask

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "inputmask", which renders an input using the [bigdsk:inputmask](https://atmospherejs.com/bigdsk/inputmask) for [jquery.inputmask](https://github.com/RobinHerbots/jquery.inputmask) plugin.
## Installation

In a Meteor app directory, enter:
```bash
$ meteor add ksrv:autoform-inputmask
```

## Usage

```js
{
    somefield: {
        type: String,
        label: '...',
        autoform: {
            type: 'inputmask',
            afFieldInput: {
                mask: '(999)-999-99-99',
                maskOptions: {
                    clean: true
                }
            }
        }
    }
}
```

Set date format

```js
{
    birthday: {
        type: Date,
        autoform: {
            type: 'inputmask',
            mask: 'dd.mm.yyyy',
            maskOptions: {
                dateFormat: 'DD.MM.YYYY', // momentjs format
                placeholder: 'dd.mm.yyyy'
            }
        }
    }
}
```

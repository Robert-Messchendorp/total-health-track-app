const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const applicationScheme = new Schema({
    Navigation: { type: Object, required: true },
    Id: { type: String, required: true, unique: true },
    DisplayName: { type: String, required: true},
    Entity: { type: String, required: true},
    Icon: { type: String, required: true, unique: true},
    SubEntities: { type: Object, required: true},
    Router: { type: String, required: true, unique: true},
    InputCard: { type: Object, required: true},
    CardTitle: { type: String, required: true},
    CardSubTitle: { type: String, required: true},
    Controls: { type: Object, required: true},
    ModelName: { type: String, required: true, unique: true},
    ControlType: { type: String, required: true},
    Options: { type: Object, required: true},
    PlaceHolder: { type: String, required: true},
    ToolTip: { type: String, required: true},
    RequiredLevel: { type: Boolean, required: true},
    Visible: { type: Boolean, required: true},
    ShowLabel: { type: Boolean, required: true},
    Disabled: { type: Boolean, required: true},
    QueryParameters: { type: String, required: true},
});

applicationScheme.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('ams', applicationScheme);
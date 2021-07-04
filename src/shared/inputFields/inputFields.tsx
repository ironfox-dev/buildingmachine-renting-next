import { Checkbox, FormControlLabel, InputBase, Radio, TextField } from '@material-ui/core';
import { ToggleButtonGroup } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';

import {
  customizeCheckboxStyle,
  customizeFormLabelStyle,
  customizeInputStyle,
  borderlessTextFieldStyle,
  customizeTextFieldStyle,
  customizeInputStyleColored,
  customizeToggleButtonGroup,
  whiteBackgroundInputStyle,
} from './inputFields.styles';

export const CssTextField = withStyles(customizeTextFieldStyle)(TextField);
export const CssInput = withStyles(customizeInputStyle)(InputBase);
export const CssBorderlessInput = withStyles(borderlessTextFieldStyle)(TextField);
export const CssCheckbox = withStyles(customizeCheckboxStyle)(Checkbox);
export const CssRadio = withStyles(customizeCheckboxStyle)(Radio);
export const CssFormControlLabel = withStyles(customizeFormLabelStyle)(FormControlLabel);
export const ColoredInput = withStyles(customizeInputStyleColored)(InputBase);
export const StyledToggleButtonGroup = withStyles(customizeToggleButtonGroup)(ToggleButtonGroup);
export const StyledWhiteTextField = withStyles(whiteBackgroundInputStyle)(TextField);

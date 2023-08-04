import { MenuItem, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export function SelectTextFields() {
  return (
    <Stack>
      <div>
        <TextField
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Stack>
  );
}

export default function BasicTextFields() {
  return (
    <Stack>
      <Stack
        spacing={4}
        direction={"row"}
        sx={{ border: "1px solid black", padding: 2, margin: 4 }}
      >
        <TextField variant="outlined" size="small" label={"Name"} />
        <TextField variant="standard" size="small" label={"Name"} />
        <TextField variant="filled" size="small" label={"Name"} />
        <TextField
          variant="filled"
          size="small"
          label={"Password"}
          type="password"
        />
        <TextField
          variant="filled"
          size="small"
          label={"Search"}
          type="search"
          error={true}
        />
        <TextField
          variant="filled"
          size="small"
          label={"Search"}
          type="search"
          multiline
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>
      <Stack
        direction={"row"}
        sx={{ border: "1px solid black", padding: 2, margin: 4 }}
      >
        <TextField select label={"select text "} defaultValue={"select"}>
          <MenuItem> hello </MenuItem>
          <MenuItem> hii </MenuItem>
          <MenuItem> aryan </MenuItem>
          <MenuItem> abhijeet </MenuItem>
        </TextField>
      </Stack>
    </Stack>
  );
}

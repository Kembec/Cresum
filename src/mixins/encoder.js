import { decode, encode } from "js-base64";
import JSONCrush from "JSONCrush";

export default {
	methods: {
		encode(data) {
			return encodeURIComponent(encode(JSONCrush.crush(data)));
		},
		decode(data) {
			return JSONCrush.uncrush(decode(decodeURIComponent(data)));
		},
	},
};

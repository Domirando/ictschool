import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Map from "../components/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Page from "../components/page";
import styles from "../styles/contact.module.css";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  const header_content = (
    <h1 className={styles.header_title}>Bog&rsquo;lanish</h1>
  );
  return (
    <div className={styles.contact_page}>
      <Page
        headerHeight={"90vh"}
        headerBg={"/images/img_11.png"}
        gradient="linear-gradient(0deg, hsla(0.9, 0%, 10%, 0.6), hsla(0.9, 50%, 100%, 0))"
        header={false}
        t_desc="Ariza, shikoyat yoki taklifingiz bo‘lsa bizga murojaat qiling, biz tez orada Siz bilan bog‘lanamiz!"
        header__content={header_content}
      >
        <div className={styles.contact_content}>
          <div className={styles.contact_zone}>
            <Heading as="h2" size="2xl">
              QAYTA ALOQA
            </Heading>
            <Text fontSize="xl">
              Quyidagi maydonchalarni o‘zingiz haqingizdagi ma’lumotlar bilan
              to‘ldiring va murojaat matningizni batafsil yuboring. Sizning
              murojaatingiz biz uchun muhim!
            </Text>
            {error && (
              <Text color="red.300" my={4} fontSize="xl">
                {error}
              </Text>
            )}
            <div id={styles.contact_inputs}>
              <FormControl
                isRequired
                isInvalid={touched.name && !values.name}
                mb={5}
              >
                <Input
                  placeholder="To'liq ismingiz"
                  type="text"
                  name="name"
                  className={styles.contact_inpuut}
                  errorBorderColor="red.300"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={touched.email && !values.email}
                mb={5}
              >
                <Input
                  className={styles.contact_inpuut}
                  placeholder="Email"
                  type="email"
                  name="email"
                  errorBorderColor="red.300"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <FormControl
                mb={5}
                isRequired
                isInvalid={touched.subject && !values.subject}
              >
                <Input
                  placeholder="Murojaat mavzusi"
                  className={styles.contact_inpuut}
                  type="text"
                  name="subject"
                  errorBorderColor="red.300"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                mb={5}
              >
                <Textarea
                  className={styles.contact_inpuut}
                  placeholder="Murajaat matni"
                  type="text"
                  name="message"
                  rows={4}
                  errorBorderColor="red.300"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>

              <Button
                variant="outline"
                colorScheme="blue"
                isLoading={isLoading}
                className={styles.contact_btn}
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
              >
                Yuborish
              </Button>
            </div>
          </div>
          <div className={styles.address}>
            <Heading as="h2" size="2xl">
              Manzil
            </Heading>
            <Text fontSize="xl">
              Toshkent shahar, Yashnabod tumani Mahtumquli 1-Tor ko‘chasi, 28.
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan AKT maktabi
            </Text>
            <Text fontSize="xl">
              <FontAwesomeIcon icon={faEnvelope} />
              info@ictschool.uz
            </Text>
            <Map />
          </div>
        </div>
      </Page>
    </div>
  );
}

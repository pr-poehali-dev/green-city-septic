import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  objectType: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    objectType: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения";
    } else if (!/^[\+]?[7|8]?[\s\-]?[\(]?[0-9]{3}[\)]?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.objectType) {
      newErrors.objectType = "Выберите тип объекта";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Ошибка валидации",
        description: "Пожалуйста, исправьте ошибки в форме",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Заявка отправлена!",
        description: "Наш специалист свяжется с вами в течение часа",
      });

      // Сброс формы
      setFormData({
        name: "",
        phone: "",
        email: "",
        objectType: "",
        message: ""
      });
      setErrors({});

    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте еще раз или позвоните нам",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 1) return numbers;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
  };

  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-center text-nature-text">
          Получить консультацию
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Оставьте заявку и наш специалист свяжется с вами
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-nature-text font-medium">
              Ваше имя *
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Введите ваше имя"
              className={`${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-primary`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-nature-text font-medium">
              Телефон *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', formatPhoneNumber(e.target.value))}
              placeholder="+7 (___) ___-__-__"
              className={`${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-primary`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-nature-text font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="example@mail.ru"
              className={`${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-primary`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="objectType" className="text-nature-text font-medium">
              Тип объекта *
            </Label>
            <Select value={formData.objectType} onValueChange={(value) => handleInputChange('objectType', value)}>
              <SelectTrigger className={`${errors.objectType ? 'border-red-500' : 'border-gray-200'} focus:border-primary`}>
                <SelectValue placeholder="Выберите тип объекта" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private-house">Частный дом</SelectItem>
                <SelectItem value="cottage">Дача</SelectItem>
                <SelectItem value="commercial">Коммерческий объект</SelectItem>
                <SelectItem value="apartment">Квартира</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
            {errors.objectType && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.objectType}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-nature-text font-medium">
              Дополнительная информация
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Расскажите о ваших потребностях, количестве жильцов, особенностях участка..."
              rows={4}
              className="border-gray-200 focus:border-primary resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-700 disabled:opacity-50" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                Отправляем заявку...
              </>
            ) : (
              <>
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </>
            )}
          </Button>

          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Icon name="Shield" size={14} className="mt-0.5 text-primary shrink-0" />
            <p>
              Нажимая кнопку, вы соглашаетесь с{" "}
              <span className="text-primary cursor-pointer hover:underline">
                политикой конфиденциальности
              </span>{" "}
              и даете согласие на обработку персональных данных
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { OfficialWhatsAppBadge } from './WhatsAppIcon';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Paperclip, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || 'Fabricación y Montaje de Estructuras Metálicas',
    location: 'Punta Cana – Bávaro',
    message: '',
  });

  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('PREMOM-PQ-5021');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [prevInitialService, setPrevInitialService] = useState(initialService);
  if (initialService && initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    setFormData(prev => ({ ...prev, service: initialService }));
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Ingrese su nombre y apellido';
    if (!formData.phone.trim()) errors.phone = 'Ingrese un número telefónico de contacto';
    if (!formData.email.trim()) {
      errors.email = 'Ingrese su correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }
    if (!formData.message.trim()) errors.message = 'Describa brevemente el requerimiento o proyecto';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    const code = `PREMOM-PQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(code);

    const text = encodeURIComponent(
      `*SOLICITUD DE CONTACTO - PREMOM SRL*\n` +
      `*Referencia:* ${code}\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'No especificada'}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Correo:* ${formData.email}\n` +
      `*Servicio:* ${formData.service}\n` +
      `*Ubicación:* ${formData.location}\n` +
      (attachedFileName ? `*Archivo:* ${attachedFileName}\n` : '') +
      `\n*Requerimiento:* ${formData.message}`
    );

    window.open(`https://wa.me/18293802005?text=${text}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `*SOLICITUD DE CONTACTO PREMOM*\n` +
      `*Nombre:* ${formData.name || 'Cliente'}\n` +
      `*Empresa:* ${formData.company || 'No especificada'}\n` +
      `*Teléfono:* ${formData.phone || 'Pendiente'}\n` +
      `*Correo:* ${formData.email || 'Pendiente'}\n` +
      `*Servicio:* ${formData.service}\n` +
      `*Ubicación:* ${formData.location}\n` +
      `*Mensaje:* ${formData.message || 'Deseo información técnica sobre un proyecto.'}`
    );
    window.open(`https://wa.me/18293802005?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header with Font Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-medium uppercase tracking-wider text-lime-800"
          >
            Atención Comercial & Técnica • PREMOM
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight mt-2"
          >
            Contacto y Solicitud de Información
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Póngase en contacto con nuestro equipo de ingeniería para consultas técnicas, visitas a obra o presupuestos desglosados en Punta Cana y todo el país.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Official Contact Info Cards (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-50 p-6 sm:p-8 space-y-6">
              <div className="pb-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Canales Directos de Atención
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Respuesta inmediata para constructoras, hoteles e industrias.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Phone */}
                <a
                  href="tel:+18293802005"
                  className="flex items-start gap-3 p-3 bg-white hover:bg-slate-100 transition-colors"
                >
                  <div className="pt-0.5 shrink-0">
                    <Phone className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Teléfono / Oficina</div>
                    <div className="font-bold text-slate-900">
                      +1 (829) 380-2005
                    </div>
                    <div className="text-[11px] text-lime-800 font-medium mt-0.5">
                      Disponible para llamadas directas
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:premom@premomprefabricados.com"
                  className="flex items-start gap-3 p-3 bg-white hover:bg-slate-100 transition-colors"
                >
                  <div className="pt-0.5 shrink-0">
                    <Mail className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Correo Corporativo</div>
                    <div className="font-bold text-slate-900 break-all">
                      premom@premomprefabricados.com
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 bg-white">
                  <div className="pt-0.5 shrink-0">
                    <MapPin className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Ubicación de Operaciones</div>
                    <div className="font-bold text-slate-900">
                      Punta Cana – Bávaro
                    </div>
                    <div className="text-xs text-slate-600">
                      Provincia La Altagracia, República Dominicana
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start gap-3 p-3 bg-white">
                  <div className="pt-0.5 shrink-0">
                    <Clock className="w-5 h-5 text-lime-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Horario Laboral</div>
                    <div className="font-bold text-slate-900">
                      Lunes a Sábado: 7:30 AM – 6:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action with Official WhatsApp Logo */}
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors"
                id="btn-direct-whatsapp-chat"
              >
                <OfficialWhatsAppBadge className="w-4 h-4" />
                <span>Escribir al WhatsApp (+1 829 380-2005)</span>
              </button>
            </div>

            {/* Note */}
            <div className="p-4 bg-slate-50 flex items-center gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-lime-700 shrink-0" />
              <span>
                Visitas de inspección técnica en la zona de Punta Cana y Bávaro coordinadas en menos de 24 horas.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Clean Light Contact Form (7 cols) - Sharp, Flat */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-lime-100 text-lime-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Mensaje Recibido Correctamente
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos registrado su solicitud. Un ingeniero de proyectos de <strong>PREMOM</strong> se pondrá en contacto a la brevedad para atender su requerimiento.
                  </p>

                  <div className="p-3 bg-white max-w-xs mx-auto text-xs text-slate-800 font-bold tracking-wider">
                    Código de Referencia: {referenceCode}
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-5 py-2.5 bg-lime-600 hover:bg-lime-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <OfficialWhatsAppBadge className="w-4 h-4" />
                      <span>Notificar por WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-100"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="corporate-contact-form">
                  <div className="pb-3 mb-2">
                    <h3 className="text-base font-bold text-slate-900">
                      Formulario de Solicitud de Información
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      Complete los datos para coordinar una reunión o recibir cotización de su proyecto.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nombre Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ej. Ing. Carlos Martínez"
                        className={`w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all ${
                          formErrors.name ? 'ring-2 ring-red-500' : ''
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Empresa / Constructora
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ej. Constructora del Este SRL"
                        className="w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Teléfono / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (829) 000-0000"
                        className={`w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all ${
                          formErrors.phone ? 'ring-2 ring-red-500' : ''
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Correo Electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="correo@ejemplo.com"
                        className={`w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all ${
                          formErrors.email ? 'ring-2 ring-red-500' : ''
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Servicio Principal
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all"
                      >
                        <option value="Fabricación y Montaje de Estructuras Metálicas">
                          Fabricación y Montaje de Estructuras Metálicas
                        </option>
                        <option value="Fabricación y Montaje de Tuberías Industriales">
                          Fabricación y Montaje de Tuberías Industriales
                        </option>
                        <option value="Fabricación e Instalación de Barandillas en Acero Inoxidable">
                          Barandillas en Acero Inoxidable
                        </option>
                        <option value="Soldaduras en General (TIG, MIG, Electrodo)">
                          Soldaduras en General
                        </option>
                        <option value="Mantenimiento y Reparación de Instalaciones">
                          Mantenimiento y Reparación de Instalaciones
                        </option>
                        <option value="Trabajos a Medida y Proyectos Especiales">
                          Trabajos a Medida y Proyectos Especiales
                        </option>
                        <option value="Soluciones Integrales para Industria y Construcción">
                          Soluciones Integrales para Industria y Construcción
                        </option>
                        <option value="Asesoramiento Técnico">
                          Asesoramiento Técnico
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Ubicación de la Obra
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all"
                      >
                        <option value="Punta Cana – Bávaro">Punta Cana – Bávaro</option>
                        <option value="Cap Cana">Cap Cana</option>
                        <option value="Uvero Alto / Macao">Uvero Alto / Macao</option>
                        <option value="La Romana / Bayahibe">La Romana / Bayahibe</option>
                        <option value="Santo Domingo">Santo Domingo</option>
                        <option value="Otra provincia de RD">Otra provincia de RD</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Descripción del Requerimiento <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa el alcance del proyecto, perfiles requeridos, dimensiones o cronograma estimado..."
                      className={`w-full bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-600 transition-all ${
                        formErrors.message ? 'ring-2 ring-red-500' : ''
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Attachment */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adjuntar Planos o Especificaciones (PDF, DWG, Fotos)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="planos-upload"
                        onChange={handleFileChange}
                        accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.zip"
                        className="hidden"
                      />
                      <label
                        htmlFor="planos-upload"
                        className="flex items-center justify-between p-2.5 bg-white hover:bg-slate-100 cursor-pointer transition-colors text-xs text-slate-600"
                      >
                        <div className="flex items-center gap-2">
                          <Paperclip className="w-4 h-4 text-slate-500" />
                          <span>
                            {attachedFileName ? (
                              <strong className="text-slate-900">{attachedFileName}</strong>
                            ) : (
                              'Seleccionar archivo técnico desde su equipo'
                            )}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-slate-100 text-slate-600">
                          {attachedFileName ? 'Cargado' : 'Examinar'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button - WhatsApp Direct Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 disabled:opacity-50"
                      id="submit-contact-form-btn"
                    >
                      {isSubmitting ? (
                        <span>Abriendo WhatsApp...</span>
                      ) : (
                        <>
                          <OfficialWhatsAppBadge className="w-4 h-4" />
                          <span>Enviar Solicitud por WhatsApp</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
